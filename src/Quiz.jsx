import React, { useState, useEffect } from 'react';
import { questions } from './questions';

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState({});
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [submitted, setSubmitted] = useState({});
    const [showFinalScore, setShowFinalScore] = useState(false);

    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(submitted).length;

    const handleSelectOption = (questionId, optionIndex) => {
        if (submitted[questionId]) return;

        const question = questions.find(q => q.id === questionId);
        const newAnswers = { ...userAnswers };

        if (question.multiSelect) {
            const currentAnswers = newAnswers[questionId] || [];
            if (currentAnswers.includes(optionIndex)) {
                newAnswers[questionId] = currentAnswers.filter(i => i !== optionIndex);
            } else {
                newAnswers[questionId] = [...currentAnswers, optionIndex];
            }
        } else {
            newAnswers[questionId] = [optionIndex];
        }
        setUserAnswers(newAnswers);
    };

    const handleSubmitAnswer = (questionId) => {
        const question = questions.find(q => q.id === questionId);
        const userAnswer = userAnswers[questionId] || [];
        const isCorrect = arraysEqual(userAnswer.sort(), question.correct.sort());

        if (isCorrect) {
            setCorrectAnswers(prev => prev + 1);
        }

        setSubmitted(prev => ({ ...prev, [questionId]: true }));
    };

    useEffect(() => {
        if (answeredQuestions === totalQuestions && totalQuestions > 0) {
            const timer = setTimeout(() => setShowFinalScore(true), 1000);
            return () => clearTimeout(timer);
        }
    }, [answeredQuestions, totalQuestions]);

    const resetExam = () => {
        setUserAnswers({});
        setCorrectAnswers(0);
        setSubmitted({});
        setShowFinalScore(false);
    };

    const arraysEqual = (a, b) => {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    };

    const getFinalMessage = () => {
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        let message = '';
        if (percentage >= 90) {
            message = `Outstanding! You scored ${correctAnswers}/${totalQuestions} (${percentage}%). You're ready for the AWS Solutions Architect exam! 🏆`;
        } else if (percentage >= 70) {
            message = `Great job! You scored ${correctAnswers}/${totalQuestions} (${percentage}%). Keep studying and you'll be ready soon! 📚`;
        } else if (percentage >= 50) {
            message = `Good effort! You scored ${correctAnswers}/${totalQuestions} (${percentage}%). Review the explanations and keep practicing! 💪`;
        } else {
            message = `You scored ${correctAnswers}/${totalQuestions} (${percentage}%). Don't worry - review the explanations and try again! 🎯`;
        }
        return message;
    };
    
    const progress = (answeredQuestions / totalQuestions) * 100;
    const scorePercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    if (questions.length === 0) {
        return <div style={{textAlign: 'center', marginTop: '40px'}}>Loading questions...</div>;
    }

    return (
        <>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="score-display">
                <h3>Score: {correctAnswers}/{totalQuestions} ({scorePercentage}%) | Progress: {answeredQuestions}/{totalQuestions}</h3>
            </div>

            {/* Scoreboard Section */}
            <div className="scoreboard">
              <h3>Attempted Questions: {answeredQuestions}</h3>
              <div>
                <strong>Score:</strong> {correctAnswers} / {answeredQuestions}
              </div>
            </div>

            <div id="quiz-container">
                {questions.map(question => (
                    <Question
                        key={question.id}
                        question={question}
                        userAnswer={userAnswers[question.id] || []}
                        isSubmitted={submitted[question.id]}
                        onSelectOption={handleSelectOption}
                        onSubmit={handleSubmitAnswer}
                    />
                ))}
            </div>

            {showFinalScore && (
                <div className="final-score show">
                    <h2>🎉 Exam Complete!</h2>
                    <p>{getFinalMessage()}</p>
                    <button className="reset-btn" onClick={resetExam}>Take Exam Again</button>
                </div>
            )}
        </>
    );
};

const Question = ({ question, userAnswer, isSubmitted, onSelectOption, onSubmit }) => {
    const { id, text, options, multiSelect, correct, explanation, focus, focusExplanation } = question;

    const getOptionClass = (optionIndex) => {
        if (!isSubmitted) {
            return userAnswer.includes(optionIndex) ? 'option selected' : 'option';
        }

        const isCorrect = correct.includes(optionIndex);
        const isSelected = userAnswer.includes(optionIndex);

        if (isCorrect) return 'option correct-answer';
        if (isSelected && !isCorrect) return 'option incorrect';
        return 'option';
    };

    return (
        <div className="question-container">
            <div className="question-header">
                <div className="question-number">Question {id}</div>
                {isSubmitted && focus && <div className="focus-keyword">{focus}</div>}
            </div>
            <div className="question-text">{text}</div>
            <div className="options" id={`options-${id}`}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={getOptionClass(index)}
                        onClick={() => onSelectOption(id, index)}
                    >
                        <input
                            type={multiSelect ? 'checkbox' : 'radio'}
                            name={`question-${id}`}
                            value={index}
                            id={`q${id}-${index}`}
                            checked={userAnswer.includes(index)}
                            readOnly
                        />
                        <label htmlFor={`q${id}-${index}`}>{String.fromCharCode(65 + index)}) {option}</label>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <button
                    className="submit-btn"
                    onClick={() => onSubmit(id)}
                    id={`submit-${id}`}
                    disabled={isSubmitted}
                >
                    {isSubmitted ? 'Submitted' : 'Submit Answer'}
                </button>
            </div>
            {isSubmitted && (
                <div className="explanation show" id={`explanation-${id}`}>
                    <h4>✅ Correct Answer: {correct.map(i => String.fromCharCode(65 + i)).join(', ')}</h4>
                    <p>{explanation}</p>
                    {focus && (
                        <div className="focus-explanation-block">
                            <h4>💡 Focus On: {focus}</h4>
                            <p>{focusExplanation}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};


export default Quiz; 