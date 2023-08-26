// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Button className="border rounded-md py-2 px-3 hover:brightness-90 bg-indigo-500 text-white disabled:bg-black">
      Example Button
    </Button>
  ),
}

export const Secondary: Story = {
  render: () => (
    <Button className="border rounded-md py-2 px-3  text-indigo-500  hover:brightness-90">
      Example Button
    </Button>
  ),
}
