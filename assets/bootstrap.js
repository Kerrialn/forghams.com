import {startStimulusApp} from '@symfony/stimulus-bundle';
import ImageGrid from 'stimulus-image-grid'

const app = startStimulusApp();
app.register('image-grid', ImageGrid)