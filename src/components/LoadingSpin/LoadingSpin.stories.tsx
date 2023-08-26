// Button.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react'

import { LoadingSpin } from './'

const meta: Meta<typeof LoadingSpin> = {
  component: LoadingSpin,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoadingSpin>

// 👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    isLoading: true,
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex justify-center">
          <Story isLoading={true} />
        </div>
      )
    },
  ],
}
