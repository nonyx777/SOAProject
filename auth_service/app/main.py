from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:8000",
    "http://localhost:8001",
    "http://localhost:8002",
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:8000",
    "http://127.0.0.1:8001",
    "http://127.0.0.1:8002",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
    "http://0.0.0.0:8000",
    "http://0.0.0.0:8001",
    "http://0.0.0.0:8002",
    "http://0.0.0.0:3000",
    "http://0.0.0.0:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/login/", response_model=schemas.Credential)
def login(credential: schemas.CredentialUpdate, db: Session = Depends(get_db)):
    db_credential = crud.verify_credentials(db, credential)

    if db_credential:
        return db_credential
    else:
        raise HTTPException(status_code=401, detail="Invalid username or password")

@app.post("/update/", response_model=schemas.Credential)
def update_credential(credential: schemas.CredentialUpdate, db: Session = Depends(get_db)):
    db_credential = crud.update_credential(db, credential)
    return db_credential

# temporary function
@app.get("/credentials/", response_model=list[schemas.Credential])
def read_clients(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    credentials = crud.get_credentials(db, skip=skip, limit=limit)
    return credentials