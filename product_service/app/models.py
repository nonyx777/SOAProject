from sqlalchemy import Column, Integer, String, Text, Boolean, DECIMAL, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Product(Base):
    __tablename__ = 'products'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(Text, nullable=True)
    image = Column(String, nullable=False)
    price = Column(DECIMAL(10, 2), nullable=False)
    amount_left = Column(Integer, nullable=False)
    is_up_for_auction = Column(Boolean, default=False)
