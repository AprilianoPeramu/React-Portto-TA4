import React from 'react';

function SkillPage(props) {
    return (
        <div>
            <div className="skill">
                <div className='container text-center'>
                    <div className='row aturskill'>
                        <div className='col' >
                            <h1 className='h1about'>Skill Page</h1>
                            <br />
                            <div class="column right">
                                <div class="bars">
                                    <div class="info">
                                        <span>HTML</span>
                                        <span>80%</span>
                                    </div>
                                    <div class="line html"></div>
                                </div>
                                <div class="bars">
                                    <div class="info">
                                        <span>CSS</span>
                                        <span>70%</span>
                                    </div>
                                    <div class="line css"></div>
                                </div>
                                <div class="bars">
                                    <div class="info">
                                        <span>JavaScript</span>
                                        <span>50%</span>
                                    </div>
                                    <div class="line js"></div>
                                </div>
                                <div class="bars">
                                    <div class="info">
                                        <span>React Js</span>
                                        <span>65%</span>
                                    </div>
                                    <div class="line react"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillPage;