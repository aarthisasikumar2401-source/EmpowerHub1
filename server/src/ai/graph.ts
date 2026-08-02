import { StateGraph, END, START } from "@langchain/langgraph";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { SystemMessage, HumanMessage, BaseMessage } from "@langchain/core/messages";
import * as dotenv from "dotenv";

dotenv.config();

// Define the state type for the graph
interface AgentState {
  messages: BaseMessage[];
  language: string;
}

const llm = new ChatGoogleGenerativeAI({
  modelName: "gemini-1.5-flash",
  maxOutputTokens: 2048,
});

async function businessAgentNode(state: AgentState): Promise<Partial<AgentState>> {
  const { messages, language } = state;
  const systemPrompt = new SystemMessage(
    `You are the EmpowerHub AI Business Operating System. 
    You must strictly respond in the user's preferred language: ${language}.
    Your goal is to orchestrate business creation, marketing, and education.`
  );
  
  const response = await llm.invoke([systemPrompt, ...messages]);
  return { messages: [response] };
}

// Define the graph
const workflow = new StateGraph<AgentState>({
  channels: {
    messages: {
      value: (x: BaseMessage[], y: BaseMessage[]) => x.concat(y),
      default: () => [],
    },
    language: {
      value: (x: string, y: string) => y ?? x,
      default: () => "English",
    }
  }
});

workflow.addNode("agent", businessAgentNode);
workflow.addEdge(START, "agent");
workflow.addEdge("agent", END);

export const app = workflow.compile();
