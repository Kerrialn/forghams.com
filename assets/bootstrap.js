import { startStimulusApp } from '@symfony/stimulus-bundle';
import ImageGrid from 'stimulus-image-grid'

const app = startStimulusApp();
// register any custom, 3rd party controllers here
app.register('image-grid', ImageGrid)