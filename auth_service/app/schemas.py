from pydantic import BaseModel

class CredentialBase(BaseModel):
    username: str
    password: str

class CredentialUpdate(CredentialBase):
    pass

class Credential(CredentialBase):
    id: int
    
    class Config:
        orm_mode = True