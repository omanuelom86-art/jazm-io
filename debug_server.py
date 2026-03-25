import os
from fastapi import FastAPI
from fastapi.responses import PlainTextResponse

app = FastAPI()

@app.get("/debug-logs")
def get_logs(file: str = "evolution.err"):
    path = f"/tmp/{file}"
    if os.path.exists(path):
        with open(path, "r") as f:
            return PlainTextResponse(f.read())
    return f"File {path} not found"

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002)
