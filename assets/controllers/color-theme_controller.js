import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['icon']

    connect() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
        this.updateIcon(savedTheme);
    }

    toggle(event) {
        event.preventDefault();
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateIcon(newTheme);
    }

    updateIcon(theme) {
        const modeIcon = this.iconTarget;
        if (theme === 'dark') {
            modeIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        } else {
            modeIcon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        }
    }
}
