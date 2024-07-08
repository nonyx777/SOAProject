from fastapi import FastAPI
import httpx

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from Service 2"}

@app.get("/service2")
async def read_service2():
    async with httpx.AsyncClient() as client:
        response = await client.get("http://service1:8000/service1")
        data = response.json()
        return {"message": "This is Service 2", "service1_data": data}