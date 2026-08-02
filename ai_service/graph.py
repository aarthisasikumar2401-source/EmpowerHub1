from typing import Annotated, TypedDict
from langgraph.graph import StateGraph, START, END
from langchain_openai import ChatOpenAI
from langchain_core.messages import SystemMessage, HumanMessage, AnyMessage
from langgraph.graph.message import add_messages

class AgentState(TypedDict):
    messages: Annotated[list[AnyMessage], add_messages]
    language: str

def get_llm():
    return ChatOpenAI(model="gpt-4o")

def business_agent(state: AgentState):
    llm = get_llm()
    system_msg = SystemMessage(
        content=f"You are the Empower Hub AI Business Operating System. "
                f"You are talking to a user whose preferred language is {state.get('language', 'English')}. "
                f"Your goal is to guide them from zero knowledge to a successful business."
    )
    messages = [system_msg] + state["messages"]
    response = llm.invoke(messages)
    return {"messages": [response]}

# Define the graph
workflow = StateGraph(AgentState)
workflow.add_node("agent", business_agent)
workflow.add_edge(START, "agent")
workflow.add_edge("agent", END)
app = workflow.compile()
