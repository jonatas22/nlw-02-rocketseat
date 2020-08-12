import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/16616459?s=460&u=535d5e221c4d8d5229e87f892b5e6e1d638ca74b&v=4" alt="Jonatas de Oliveira"/>
                        <div>
                            <strong>Jonatas de Oliveira Coelho</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        
                    </p>

                </article>
            </main>
        </div>
    )
}

export default TeacherList;