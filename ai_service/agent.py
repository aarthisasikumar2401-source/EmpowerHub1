import asyncio
import logging
from livekit.agents import AutoSubscribe, JobContext, JobProcess, WorkerOptions, cli
from livekit.plugins import openai

logger = logging.getLogger("empower-hub-agent")

async def entrypoint(ctx: JobContext):
    await ctx.connect(auto_subscribe=AutoSubscribe.AUDIO_ONLY)
    logger.info("Connected to LiveKit Room!")

    # Standard Voice Assistant setup using OpenAI Whisper/TTS integration provided by LiveKit
    # Note: In a full production implementation, the agent's logic would be wired through 
    # LangGraph in `graph.py` to route intents instead of a simple conversational loop.
    
    agent = openai.VoicePipelineAgent(
        vad=openai.VAD(),
        stt=openai.STT(),
        llm=openai.LLM(),
        tts=openai.TTS(),
    )
    
    agent.start(ctx.room)
    
    # Send a welcome message based on the room's metadata or default to English
    await agent.say("Hello, welcome to Empower Hub. How can I help you build your business today?", allow_interruptions=True)

if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))
