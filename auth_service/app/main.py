from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/credentials/", response_model=schemas.Credential)
def update_credential(credential: schemas.CredentialUpdate, db: Session = Depends(get_db)):
    db_credential = crud.update_credential(db, credential)
    return db_credential

@app.get("/credentials/", response_model=list[schemas.Credential])
def read_clients(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    credentials = crud.get_credentials(db, skip=skip, limit=limit)
    return credentials