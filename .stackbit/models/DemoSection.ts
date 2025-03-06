import { Model } from '@stackbit/types';

export const DemoSection: Model = {
    type: 'object',
    name: 'DemoSection',
    label: 'Demo Section',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['sectionComponent'],
    fields: [
        { type: 'string', name: 'title', label: 'Title', default: 'Demo Title', required: true },
        { type: 'string', name: 'description', label: 'Description', default: 'This is a demo section that showcases how to create custom components.', required: true }
    ]
};