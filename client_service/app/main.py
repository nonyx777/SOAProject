from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from Service 1"}

@app.get("/service1")
def read_service():
    return {"message": "This is Service 1"}