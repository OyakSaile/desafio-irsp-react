// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { InputText } from './'
import { Formik } from 'formik'

const meta: Meta<typeof InputText> = {
  component: InputText,
  args: {
    label: 'Input Text',
    placeholder: 'Placeholder',
    hasError: false,
  },
  decorators: [
    (Story) => (
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Story />
      </Formik>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof InputText>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <InputText name="name" {...args} />,
}
