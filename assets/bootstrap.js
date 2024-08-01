import { startStimulusApp } from '@symfony/stimulus-bundle';
import ImageGrid from 'stimulus-image-grid'

const app = startStimulusApp();
document.addEventListener('DOMContentLoaded', function() {
    app.register('image-grid', ImageGrid)
})