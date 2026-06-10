from pydantic import BaseModel

class ProjectInfo(BaseModel):
    name: str
    description: str
    languages: list[str]
    '''tech_stack: list[str]
    features:list[str]
    learning_outcomes:list[str]

'''