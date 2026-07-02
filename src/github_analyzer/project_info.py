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

class ProjectAnalysis(BaseModel):
    project_purpose: str
    problem_solved: str
    tech_stack: list[str]
    key_features: list[str]
    technical_challenges: list[str]
    real_world_applications: list[str]
    learning_outcomes: list[str]
    architecture_summary: str