import React from 'react';

const blockContent = {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { 
          title: 'Center Text', 
          value: 'center',
          component: props => React.createElement('div', { style: { textAlign: 'center', width: '100%' } }, props.children)
        },
        { 
          title: 'Right Text', 
          value: 'right',
          component: props => React.createElement('div', { style: { textAlign: 'right', width: '100%' } }, props.children)
        },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong (Bold)', value: 'strong' },
          { title: 'Emphasis (Italic)', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
        annotations: [
          {
            title: 'Text Alignment',
            name: 'textAlign',
            type: 'object',
            icon: () => '↔️', // Icon for alignment
            components: {
              annotation: props => React.createElement(
                'div', 
                { style: { display: 'block', textAlign: props.value?.align || 'left', width: '100%' } }, 
                props.renderDefault(props)
              )
            },
            fields: [
              {
                title: 'Alignment',
                name: 'align',
                type: 'string',
                options: {
                  list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Center', value: 'center' },
                    { title: 'Right', value: 'right' },
                    { title: 'Justify', value: 'justify' }
                  ],
                  layout: 'radio',
                  direction: 'horizontal'
                },
                initialValue: 'left'
              }
            ]
          },
          {
            title: 'Text Color',
            name: 'textColor',
            type: 'object',
            icon: () => '🎨',
            components: {
              annotation: props => React.createElement('span', { style: { color: props.value?.color?.hex || 'inherit' } }, props.renderDefault(props))
            },
            fields: [
              {
                title: 'Color',
                name: 'color',
                type: 'color',
              }
            ]
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                initialValue: true
              }
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      title: 'Inline Image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'size',
          type: 'string',
          title: 'Image Size',
          options: {
            list: [
              { title: 'Small (25%)', value: 'small' },
              { title: 'Medium (50%)', value: 'medium' },
              { title: 'Large (75%)', value: 'large' },
              { title: 'Full Width (100%)', value: 'full' }
            ],
            layout: 'radio',
            direction: 'horizontal'
          },
          initialValue: 'full'
        },
        {
          name: 'alignment',
          type: 'string',
          title: 'Image Alignment',
          options: {
            list: [
              { title: 'Left', value: 'left' },
              { title: 'Center', value: 'center' },
              { title: 'Right', value: 'right' }
            ],
            layout: 'radio',
            direction: 'horizontal'
          },
          initialValue: 'center'
        }
      ],
      preview: {
        select: {
          title: 'caption',
          media: 'asset',
          alignment: 'alignment',
          size: 'size'
        },
        prepare(selection) {
          const { title, media, alignment, size } = selection;
          return {
            title: title || 'Inline Image',
            subtitle: `Align: ${alignment || 'center'} | Size: ${size || 'full'}`,
            media: media
          }
        }
      }
    },
  ],
};

const category = {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    { 
      name: 'title', 
      type: 'string', 
      title: 'Title',
      validation: Rule => Rule.required()
    },
    { name: 'description', type: 'text', title: 'Description' },
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
};

const blog = {
  name: 'blog',
  type: 'document',
  title: 'Blog Post',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: Rule => Rule.required() },
    { name: 'body', type: 'blockContent', title: 'Body (Portable Text)' },
    { 
      name: 'mainImage', 
      type: 'image', 
      title: 'Main Image', 
      options: { hotspot: true },
      fields: [
        { name: 'altText', type: 'string', title: 'Alt Text' }
      ]
    },
    { name: 'noIndex', type: 'boolean', title: 'No Index', description: 'Hide this post from search engines' },
    { name: 'ogImage', type: 'image', title: 'OG Image', options: { hotspot: true } },
    { 
      name: 'publishedAt', 
      type: 'datetime', 
      title: 'Published at', 
      validation: Rule => Rule.required(),
      initialValue: () => (new Date()).toISOString()
    },
    { 
      name: 'blogCategory', 
      type: 'reference', 
      to: [{ type: 'category' }], 
      title: 'Category' 
    },
    { name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] },
    { 
      name: 'seoTitle', 
      type: 'string', 
      title: 'SEO Title', 
      description: 'Ideal length: 50-60 characters',
      validation: Rule => Rule.custom((value) => {
        if (!value) return true;
        const len = value.length;
        if (len < 50 || len > 60) {
          return `Character count: ${len} | Ideal: 50-60`;
        }
        return true;
      }).warning()
    },
    { 
      name: 'seoDescription', 
      type: 'text', 
      title: 'SEO Description', 
      description: 'Ideal length: 150-160 characters',
      rows: 3,
      validation: Rule => Rule.custom((value) => {
        if (!value) return true;
        const len = value.length;
        if (len < 150 || len > 160) {
          return `Character count: ${len} | Ideal: 150-160`;
        }
        return true;
      }).warning()
    },
  ],
};

const property = {
  name: 'property',
  type: 'document',
  title: 'Property',
  fields: [
    { name: 'title', type: 'string', title: 'Property Title' },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Residential', value: 'Residential' },
          { title: 'Commercial', value: 'Commercial' },
          { title: 'Agricultural', value: 'Agricultural' },
          { title: 'Coastal', value: 'Coastal' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    { name: 'location', type: 'string', title: 'Location (e.g., Sowripalayam, Coimbatore)' },
    { name: 'price', type: 'string', title: 'Price (e.g., ₹45,00,000)' },
    { name: 'area', type: 'string', title: 'Area (e.g., 2,400 Sq.Ft. or 2.5 Acres)' },
    { 
      name: 'image', 
      type: 'image', 
      title: 'Property Image', 
      options: { hotspot: true }
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          { title: 'Verified', value: 'Verified' },
          { title: 'Under Offer', value: 'Under Offer' },
          { title: 'Sold', value: 'Sold' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'Verified'
    },
    { name: 'desc', type: 'text', title: 'Description' }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'image'
    }
  }
};

const gallery = {
  name: 'gallery',
  type: 'document',
  title: 'Gallery Collection',
  fields: [
    { name: 'title', type: 'string', title: 'Collection Name' },
    {
      name: 'type',
      type: 'string',
      title: 'Collection Type',
      options: {
        list: [
          { title: 'Images', value: 'image' },
          { title: 'Videos', value: 'video' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'image'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Bulk Image Upload',
      description: 'You can drag and drop multiple images here at once.',
      options: {
        layout: 'grid'
      },
      of: [
        { 
          type: 'image', 
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt Text' },
            { name: 'caption', type: 'string', title: 'Caption' }
          ]
        }
      ],
      hidden: ({ document }) => document?.type !== 'image'
    },
    {
      name: 'videos',
      type: 'array',
      title: 'Videos',
      of: [
        {
          type: 'object',
          title: 'Video Item',
          fields: [
            { name: 'videoUrl', type: 'url', title: 'Video URL (YouTube, Vimeo, etc.)' },
            { name: 'title', type: 'string', title: 'Video Title' },
            { name: 'thumbnail', type: 'image', title: 'Custom Thumbnail (Optional)' }
          ]
        }
      ],
      hidden: ({ document }) => document?.type !== 'video'
    },
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      media: 'images.0.asset'
    },
    prepare(selection) {
      const { title, type, media } = selection;
      return {
        title: title,
        subtitle: `Type: ${type === 'image' ? 'Images' : 'Videos'}`,
        media: media
      }
    }
  }
};

const registration = {
  name: 'registration',
  type: 'document',
  title: 'Lead Registration',
  fields: [
    { name: 'name', type: 'string', title: 'User Name' },
    { name: 'phone', type: 'string', title: 'Phone Number' },
    { name: 'message', type: 'text', title: 'Message' },
    { 
      name: 'createdAt', 
      type: 'datetime', 
      title: 'Submitted At',
      initialValue: () => (new Date()).toISOString(),
      readOnly: true
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'phone'
    }
  }
};

export const schemaTypes = [blockContent, category, blog, property, gallery, registration];
