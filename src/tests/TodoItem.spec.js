cat <<EOT > src/tests/TodoItem.spec.js
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoItem from '../components/TodoItem.vue'

describe('TodoItem', () => {
  it('renders a todo item', () => {
    const todo = { text: 'Test Todo', completed: false }
    const wrapper = mount(TodoItem, {
      props: { todo }
    })
    expect(wrapper.text()).toContain('Test Todo')
  })

  it('emits remove event on button click', async () => {
    const todo = { text: 'Test Todo', completed: false }
    const wrapper = mount(TodoItem, {
      props: { todo }
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('remove')
  })
})
EOT
