const data = [
    {
        "question": "Что означает аббревиатура HTML?",
        "answers": [
            { "text": "Hyperlinks and Text Markup Language", "isCorrect": false },
            { "text": "Home Tool Markup Language", "isCorrect": false },
            { "text": "Hyper Text Markup Language", "isCorrect": true },
            { "text": "Hyper Transfer Markup Language", "isCorrect": false }
        ]
    },
    {
        "question": "Какой тег используется для создания ссылки?",
        "answers": [
            { "text": "<link>", "isCorrect": false },
            { "text": "<a>", "isCorrect": true },
            { "text": "<href>", "isCorrect": false },
            { "text": "<url>", "isCorrect": false }
        ]
    },
    {
        "question": "Какой тег определяет заголовок документа HTML?",
        "answers": [
            { "text": "<head>", "isCorrect": true },
            { "text": "<header>", "isCorrect": false },
            { "text": "<h1>", "isCorrect": false },
            { "text": "<title>", "isCorrect": false }
        ]
    },
    {
        "question": "Какой атрибут указывает на URL-адрес в теге <a>?",
        "answers": [
            { "text": "src", "isCorrect": false },
            { "text": "url", "isCorrect": false },
            { "text": "link", "isCorrect": false },
            { "text": "href", "isCorrect": true }
        ]
    },
    {
        "question": "Какой тег создаёт ненумерованный список?",
        "answers": [
            { "text": "<ol>", "isCorrect": false },
            { "text": "<ul>", "isCorrect": true },
            { "text": "<li>", "isCorrect": false },
            { "text": "<list>", "isCorrect": false }
        ]
    },
    {
        "question": "Какой тег используется для вставки изображения?",
        "answers": [
            { "text": "<img>", "isCorrect": true },
            { "text": "<image>", "isCorrect": false },
            { "text": "<picture>", "isCorrect": false },
            { "text": "<src>", "isCorrect": false }
        ]
    },
    {
        "question": "Какой тег обозначает полужирный текст?",
        "answers": [
            { "text": "<i>", "isCorrect": false },
            { "text": "<strong>", "isCorrect": true },
            { "text": "<em>", "isCorrect": false },
            { "text": "<bold>", "isCorrect": false }
        ]
    },
    {
        "question": "Какой тег используется для создания таблицы?",
        "answers": [
            { "text": "<table>", "isCorrect": true },
            { "text": "<tab>", "isCorrect": false },
            { "text": "<tr>", "isCorrect": false },
            { "text": "<td>", "isCorrect": false }
        ]
    },
    {
        "question": "Какой атрибут тега <input> создаёт поле для пароля?",
        "answers": [
            { "text": "type='text'", "isCorrect": false },
            { "text": "type='password'", "isCorrect": true },
            { "text": "type='hidden'", "isCorrect": false },
            { "text": "type='secure'", "isCorrect": false }
        ]
    },
    {
        "question": "Какой тег используется для создания выпадающего списка?",
        "answers": [
            { "text": "<list>", "isCorrect": false },
            { "text": "<input type='dropdown'>", "isCorrect": false },
            { "text": "<select>", "isCorrect": true },
            { "text": "<option>", "isCorrect": false }
        ]
    }
]

export const dataReact = [
    {
        "question": "Что возвращает метод render() в React-компоненте?",
        "answers": [
            { "text": "Исходный HTML-код", "isCorrect": false },
            { "text": "JSX-разметку", "isCorrect": true },
            { "text": "Объект виртуального DOM", "isCorrect": false },
            { "text": "Строку с HTML", "isCorrect": false }
        ]
    },
    {
        "question": "Какой хук используется для управления состоянием в функциональных компонентах?",
        "answers": [
            { "text": "useEffect", "isCorrect": false },
            { "text": "useContext", "isCorrect": false },
            { "text": "useState", "isCorrect": true },
            { "text": "useReducer", "isCorrect": false }
        ]
    },
    {
        "question": "Для чего используется ключ (key) при рендеринге списков?",
        "answers": [
            { "text": "Для стилизации элементов списка", "isCorrect": false },
            { "text": "Как уникальный идентификатор для виртуального DOM", "isCorrect": true },
            { "text": "Для доступа к элементу через ref", "isCorrect": false },
            { "text": "Это обязательный атрибут HTML", "isCorrect": false }
        ]
    },
    {
        "question": "Что делает метод componentDidMount()?",
        "answers": [
            { "text": "Вызывается перед удалением компонента", "isCorrect": false },
            { "text": "Вызывается после первого рендера компонента", "isCorrect": true },
            { "text": "Используется для обновления пропсов", "isCorrect": false },
            { "text": "Обрабатывает ошибки рендеринга", "isCorrect": false }
        ]
    },
    {
        "question": "Как передать данные от родительского компонента к дочернему?",
        "answers": [
            { "text": "Через props", "isCorrect": true },
            { "text": "Через state", "isCorrect": false },
            { "text": "Через ref", "isCorrect": false },
            { "text": "Через методы жизненного цикла", "isCorrect": false }
        ]
    },
    {
        "question": "Что такое React Context?",
        "answers": [
            { "text": "Способ стилизации компонентов", "isCorrect": false },
            { "text": "Механизм передачи данных через дерево компонентов без использования props", "isCorrect": true },
            { "text": "Инструмент для работы с формами", "isCorrect": false },
            { "text": "Тип глобального хранилища состояний", "isCorrect": false }
        ]
    },
    {
        "question": "Как предотвратить стандартное поведение формы при сабмите?",
        "answers": [
            { "text": "event.stopPropagation()", "isCorrect": false },
            { "text": "event.preventDefault()", "isCorrect": true },
            { "text": "return false", "isCorrect": false },
            { "text": "event.blockDefault()", "isCorrect": false }
        ]
    },
    {
        "question": "Что такое управляемый (controlled) компонент формы?",
        "answers": [
            { "text": "Компонент с собственным состоянием", "isCorrect": false },
            { "text": "Компонент, управляемый через Redux", "isCorrect": false },
            { "text": "Элемент формы, значение которого контролируется React", "isCorrect": true },
            { "text": "Компонент с валидацией", "isCorrect": false }
        ]
    },
    {
        "question": "Какой метод используется для оптимизации перерисовки классовых компонентов?",
        "answers": [
            { "text": "React.memo()", "isCorrect": false },
            { "text": "useMemo()", "isCorrect": false },
            { "text": "Наследование от PureComponent", "isCorrect": true },
            { "text": "shouldComponentUpdate()", "isCorrect": false }
        ]
    },
    {
        "question": "Как вызвать метод дочернего компонента из родительского?",
        "answers": [
            { "text": "Через глобальную переменную", "isCorrect": false },
            { "text": "Через props-колбэк", "isCorrect": true },
            { "text": "Через прямой вызов this.child.method()", "isCorrect": false },
            { "text": "Через React.forwardRef", "isCorrect": false }
        ]
    }
]

export default data