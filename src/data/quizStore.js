import { SEED_MODULES } from './seed.js'

export const STORAGE_KEY = 'iyf-2k26-quiz'

export function createId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID()
    }
    return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function emptyQuestion() {
    return {
        id: createId(),
        text: '',
        options: ['', '', '', ''],
        correctIndex: 0,
        explanation: '',
    }
}

export function emptyModule() {
    return {
        id: createId(),
        title: 'New module',
        hard: false,
        questions: [emptyQuestion()],
    }
}

export function loadQuiz() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) {
            const parsed = JSON.parse(raw)
            if (Array.isArray(parsed?.modules)) {
                return parsed
            }
        }
    } catch {
        // Fall through to seed data when storage is empty or unreadable.
    }
    const data = { modules: SEED_MODULES }
    saveQuiz(data)
    return data
}

export function saveQuiz(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}