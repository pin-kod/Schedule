const exercisesList = document.getElementById('exercisesList');

function exercisesAll() {
    exercises.forEach(exercise => {
        const exerciseNew = document.createElement('div');
        exerciseNew.classList.add('card', 'text-dark', 'bg-light', 'border-dark', 'mt-4');
        exerciseNew.innerHTML = `
       <h4 class="card-title p-2">Занятие: ${exercise.name}</h4>
       <p class="p-2 border bg-light">Время начала занятия: ${exercise.time}</p>
       <p class="p-2 border bg-light">Максимальное количество участников: ${exercise.maxMembers}</p>
       <p class="p-2 border bg-light">Количество, записанных участников: ${exercise.currentMembers}</p>
       <button class="btn btn-primary border" onClick="register(${exercises.indexOf(exercise)})">Записаться на занятие</button>
       <button class="btn btn-primary border " onClick="cancel(${exercises.indexOf(exercise)})">Отменить запись</button>
       `
        exercisesList.appendChild(exerciseNew);
    });
}

function register(count) {
    const exercise = exercises[count];
    if (exercise.currentMembers < exercise.maxMembers) {
        exercise.currentMembers++;
        updateExercise(count);
    } else {
        alert('Запись недоступна, свободных мест нет.');
    }
}

function cancel(count) {
    const exercise = exercises[count];
    if (exercise.currentMembers > 0) {
        exercise.currentMembers--;
        updateExercise(count);
    }
}

function updateExercise(count) {
    const exerciseNew = exercisesList.children[count];
    exerciseNew.querySelector('p:nth-child(4)').textContent = `Записано ${exercises[count].currentMembers}`;
}



exercisesAll();
