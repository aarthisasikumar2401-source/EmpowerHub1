from fastapi import FastAPI
from pydantic import BaseModel
from .graph import app as graph_app

app = FastAPI(title="Empower Hub AI API")

class ChatRequest(BaseModel):
    message: str
    language: str = "English"

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    # This endpoint is a fallback if HTTP is needed over WebSocket
    result = graph_app.invoke({
        "messages": [("user", request.message)],
        "language": request.language
    })
    
    return {"response": result["messages"][-1].content}

@app.get("/health")
def health():
    return {"status": "ok"}
