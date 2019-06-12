from flask_login import UserMixin
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

Base = declarative_base()


class role(Base):
    __tablename__ = 'role'
    role_id = Column(Integer, primary_key=True)
    role_type = Column(String(100), nullable=False)
    user = relationship("user", back_populates="role")


class user(Base, UserMixin):
    __tablename__ = 'user'
    id = Column(Integer, nullable=False, primary_key=True)
    user_name = Column(String(100), nullable=False)
    age = Column(Integer, nullable=False)
    address = Column(String(100))
    email = Column(String(100), nullable=False)
    phoneNumber = Column(Integer)
    Job = Column(String(100))
    Bio = Column(String(100))
    password = Column(String(100), nullable=False)
    role_fk = Column(Integer, ForeignKey('role.role_id'))
    role = relationship('role', uselist=False, back_populates="user")
    #review = relationship('review')


class survey(Base):
    __tablename__ = 'survey'
    survey_id = Column(Integer, primary_key=True)
    nationalty = Column(String(100))
    gender = Column(String(100))
    pocket_money = Column(Integer)
    user_fk = Column(Integer, ForeignKey('user.id'))
    user = relationship(user)


class article(Base):
    __tablename__ = 'article'
    article_id = Column(Integer, primary_key=True)
    article_text = Column(String(100000))
    user_fk = Column(Integer, ForeignKey('user.id'))
    user = relationship(user)
    article_title = Column(String(50), nullable=False)


class gov(Base):
    __tablename__ = 'gov'
    gov_id = Column(Integer, primary_key=True)
    gov_name = Column(String(100))


class city(Base):
    __tablename__ = 'city'
    city_id = Column(Integer, primary_key=True)
    city_name = Column(String(100))
    gov_fk = Column(Integer, ForeignKey('gov.gov_id'))
    gov = relationship(gov)


class place(Base):
    __tablename__ = 'place'
    place_id = Column(Integer, primary_key=True)
    place_name = Column(String(100))
    place_info = Column(String(10000))
    city_fk = Column(Integer, ForeignKey('city.city_id'))
    city = relationship(city)


class visited_places(Base):
    __tablename__ = 'visited_places'
    id = Column(Integer, primary_key=True)
    place_fk = Column(Integer, ForeignKey('place.place_id'))
    place = relationship(place)
    user_fk = Column(Integer, ForeignKey('user.id'))
    user = relationship(user)


class category(Base):
    __tablename__ = 'category'
    category_id = Column(Integer, primary_key=True)
    category_name = Column(String(100))


class place_category(Base):
    __tablename__ = 'place_category'
    p_category_id = Column(Integer, primary_key=True)
    category_fk = Column(Integer, ForeignKey('category.category_id'))
    place_fk = Column(Integer, ForeignKey('place.place_id'))
    place = relationship(place)
    category = relationship(category)


class services(Base):
    __tablename__ = 'services'
    services_id = Column(Integer, primary_key=True)
    services_type = Column(String(100))
    place_fk = Column(Integer, ForeignKey('place.place_id'))
    place = relationship(place)


class reviews(Base):
    __tablename__ = 'review'
    review_id = Column(Integer, primary_key=True)
    review_content = Column(String(10000), nullable=False)
    user_fk = Column(Integer, ForeignKey("user.id"), nullable=False)
    place_fk = Column(Integer, ForeignKey("place.place_id"), nullable=False)
    place = relationship('place')


class bazzars(Base):
    __tablename__ = 'bazzars'
    bazzar_id = Column(Integer, primary_key=True)
    bazzar_name = Column(String(100))
    bazzar_phone = Column(String(100))
    bazzar_address = Column(String(100))
    service_fk = Column(Integer, ForeignKey('services.services_id'))
    services = relationship(services)


class camps(Base):
    __tablename__ = 'camps'
    camp_id = Column(Integer, primary_key=True)
    camp_name = Column(String(100))
    camp_phone = Column(String(100))
    camp_address = Column(String(100))
    service_fk = Column(Integer, ForeignKey('services.services_id'))
    services = relationship(services)


class rest_cafe(Base):
    __tablename__ = 'rest_cafe'
    rest_cafe_id = Column(Integer, primary_key=True)
    rest_cafe_name = Column(String(100))
    rest_cafe_phone = Column(String(100))
    rest_cafe_address = Column(String(100))
    service_fk = Column(Integer, ForeignKey('services.services_id'))
    services = relationship(services)


class hostels(Base):
    __tablename__ = 'hostels'
    hostel_id = Column(Integer, primary_key=True)
    hostel_name = Column(String(100))
    hostel_phone = Column(String(100))
    hostel_address = Column(String(100))
    service_fk = Column(Integer, ForeignKey('services.services_id'))
    services = relationship(services)


class car_rentals(Base):
    __tablename__ = 'car_rentals'
    car_rental_id = Column(Integer, primary_key=True)
    car_rental_name = Column(String(100))
    car_rental_phone = Column(String(100))
    car_rental_address = Column(String(100))
    service_fk = Column(Integer, ForeignKey('services.services_id'))
    services = relationship(services)


engine = create_engine('sqlite:///project.db')
Base.metadata.create_all(engine)
