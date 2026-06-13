from pydantic import BaseModel

class ProjectInfo(BaseModel):
    name: str
    description: str
    languages: list[str]
    readme: str
    requirements:str
    '''tech_stack: list[str]
    features:list[str]
    learning_outcomes:list[str]

'''