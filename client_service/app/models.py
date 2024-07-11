from sqlalchemy import Column, Integer, String, Text, Boolean, DECIMAL, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Client(Base):
    __tablename__ = 'clients'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
