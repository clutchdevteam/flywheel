export default {
  title: 'Base components/Rich text',
}

export const Default = (args) => ({
  props: Object.keys(args),
  template: '<BaseRichText v-bind="$props" />',
})

Default.argTypes = {
  content: {
    control: 'object',
  },
}

Default.args = {
  content: {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [
          {
            text: 'The Doc’s Place Program provides a ',
            type: 'text',
          },
          {
            text: 'safe & structured',
            type: 'text',
            marks: [
              {
                type: 'bold',
              },
            ],
          },
          {
            text:
              ' living space for young men who are attempting to recover from drug and alcohol use. Residents of our program are provided with opportunities to address their psychological, spiritual, and physical health daily through structured programming proven to be successful for men in recovery. ',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        content: [
          {
            text:
              'Doc’s Place Men’s Residential Recovery Program has been a successful name in the recovery community since 2007 and is known for being integrated in the local community of the Golden Isles. This is a design for living and for those of us lucky enough to surrender it is a way of life that brings us happiness, joy, and freedom. Members of the Doc’s Place Program are surrounded by well established alumni who have found new lives for themselves in recovery. Community is a major role in our program.',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
      },
      {
        type: 'paragraph',
        content: [
          {
            text: 'Italic text',
            type: 'text',
            marks: [
              {
                type: 'italic',
              },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        content: [
          {
            text: 'Strikethrough',
            type: 'text',
            marks: [
              {
                type: 'strike',
              },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        content: [
          {
            text: 'Underline',
            type: 'text',
            marks: [
              {
                type: 'underline',
              },
            ],
          },
        ],
      },
      {
        type: 'bullet_list',
        content: [
          {
            type: 'list_item',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Unordered list',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            type: 'list_item',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'second item',
                    type: 'text',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'ordered_list',
        attrs: {
          order: 1,
        },
        content: [
          {
            type: 'list_item',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Order list',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            type: 'list_item',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'second item',
                    type: 'text',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'blockquote',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                text: 'This is a quote',
                type: 'text',
              },
            ],
          },
        ],
      },
      {
        type: 'horizontal_rule',
      },
      {
        type: 'paragraph',
        content: [
          {
            text: "Here's a link",
            type: 'text',
            marks: [
              {
                type: 'link',
                attrs: {
                  href: '/admissions',
                  uuid: '9a5eee5d-49db-4e3f-b9d0-e2c03743bb30',
                  anchor: null,
                  target: '_self',
                  linktype: 'story',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        content: [
          {
            type: 'image',
            attrs: {
              alt: 'A group of men from Docs Place Recovery posing for a picture.',
              src: 'https://a.storyblok.com/f/145554/630x425/01964c60dd/img_2431-2.jpg',
              title: '',
            },
          },
        ],
      },
    ],
  },
}
