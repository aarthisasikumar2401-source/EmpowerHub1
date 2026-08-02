from langchain_core.tools import tool
from browser_use import Agent

@tool
def navigate_and_extract(url: str, task_description: str) -> str:
    """
    Uses the Browser Use library to navigate to a URL and perform a task.
    Useful for scraping competitor info or when APIs are unavailable.
    """
    # This assumes the execution of an async agent inside a synchronous tool wrapper 
    # for LangGraph, or you would use async tools if LangGraph is run async.
    import asyncio
    
    async def run_browser_agent():
        agent = Agent(
            task=f"Go to {url} and {task_description}",
            # llm model would be passed here in production
        )
        result = await agent.run()
        return result

    return asyncio.run(run_browser_agent())
