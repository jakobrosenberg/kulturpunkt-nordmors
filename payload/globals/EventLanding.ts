import type { GlobalConfig } from 'payload'

import { defaultEventLandingData } from '../../lib/defaultEventLanding'
import { authenticated } from '../access/authenticated'

export const EventLanding: GlobalConfig = {
  slug: 'event-landing',
  access: {
    read: () => true,
    update: authenticated,
  },
  admin: {
    group: 'Site',
  },
  fields: [
    {
      type: 'group',
      name: 'hero',
      label: 'Hero',
      fields: [
        {
          name: 'titleLineOne',
          label: 'Title Line One',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.hero.titleLineOne,
        },
        {
          name: 'titleLineTwo',
          label: 'Title Line Two',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.hero.titleLineTwo,
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.hero.subtitle,
        },
        {
          name: 'date',
          type: 'textarea',
          required: true,
          defaultValue: defaultEventLandingData.hero.date,
        },
        {
          name: 'location',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.hero.location,
        },
        {
          name: 'timeBadge',
          label: 'Time Badge',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.hero.timeBadge,
        },
      ],
    },
    {
      type: 'group',
      name: 'intro',
      label: 'Intro',
      fields: [
        {
          name: 'lead',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.intro.lead,
        },
        {
          name: 'highlight',
          type: 'textarea',
          required: true,
          defaultValue: defaultEventLandingData.intro.highlight,
        },
        {
          name: 'body',
          type: 'textarea',
          required: true,
          defaultValue: defaultEventLandingData.intro.body,
        },
        {
          name: 'stats',
          type: 'array',
          minRows: 1,
          defaultValue: defaultEventLandingData.intro.stats,
          fields: [
            {
              name: 'value',
              type: 'text',
              required: true,
            },
            {
              name: 'label',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'program',
      label: 'Program',
      fields: [
        {
          name: 'sectionLabel',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.program.sectionLabel,
        },
        {
          name: 'sectionTitle',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.program.sectionTitle,
        },
        {
          name: 'items',
          type: 'array',
          minRows: 1,
          defaultValue: defaultEventLandingData.program.items,
          fields: [
            {
              name: 'time',
              type: 'text',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'tag',
              type: 'select',
              required: true,
              defaultValue: 'scene',
              options: [
                { label: 'Scene', value: 'scene' },
                { label: 'Music', value: 'music' },
                { label: 'Food', value: 'food' },
                { label: 'Kulturpladsen', value: 'kulturpladsen' },
                { label: 'Havnen', value: 'havnen' },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'activities',
      label: 'Activities',
      fields: [
        {
          name: 'sectionLabel',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.activities.sectionLabel,
        },
        {
          name: 'sectionTitle',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.activities.sectionTitle,
        },
        {
          name: 'items',
          type: 'array',
          minRows: 1,
          defaultValue: defaultEventLandingData.activities.items,
          fields: [
            {
              name: 'category',
              type: 'select',
              required: true,
              defaultValue: 'workshop',
              options: [
                { label: 'Workshop', value: 'workshop' },
                { label: 'Children', value: 'children' },
                { label: 'Nature', value: 'nature' },
                { label: 'Music', value: 'music' },
              ],
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'food',
      label: 'Food',
      fields: [
        {
          name: 'sectionLabel',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.food.sectionLabel,
        },
        {
          name: 'sectionTitle',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.food.sectionTitle,
        },
        {
          name: 'items',
          type: 'array',
          minRows: 1,
          defaultValue: defaultEventLandingData.food.items,
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'market',
      label: 'Market',
      fields: [
        {
          name: 'sectionLabel',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.market.sectionLabel,
        },
        {
          name: 'sectionTitle',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.market.sectionTitle,
        },
        {
          name: 'exhibitors',
          type: 'array',
          minRows: 1,
          defaultValue: defaultEventLandingData.market.exhibitors,
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'practical',
      label: 'Practical',
      fields: [
        {
          name: 'sectionLabel',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.practical.sectionLabel,
        },
        {
          name: 'sectionTitle',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.practical.sectionTitle,
        },
        {
          name: 'items',
          type: 'array',
          minRows: 1,
          defaultValue: defaultEventLandingData.practical.items,
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'footer',
      label: 'Footer',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.footer.title,
        },
        {
          name: 'details',
          type: 'text',
          required: true,
          defaultValue: defaultEventLandingData.footer.details,
        },
        {
          name: 'note',
          type: 'textarea',
          required: true,
          defaultValue: defaultEventLandingData.footer.note,
        },
      ],
    },
  ],
}
