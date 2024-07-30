from sqlalchemy.orm import Session
from . import models, schemas

def get_credentials(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Credential).offset(skip).limit(limit).all()

def update_credential(db: Session, credential: schemas.CredentialUpdate):
    db_credential = db.query(models.Credential).filter(models.Credential.username == credential.username).first()
    
    if db_credential:
        db_credential.password = credential.password
    else:
        db_credential = models.Credential(**credential.dict())
        db.add(db_credential)
    
    db.commit()
    db.refresh(db_credential)
    return db_credential
