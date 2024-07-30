from sqlalchemy import Column, Integer, String, Text, Boolean, DECIMAL, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Credential(Base):
    __tablename__ = 'credentials'
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, index=True)
    password = Column(String, index=True)