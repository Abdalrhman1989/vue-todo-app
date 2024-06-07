import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoItem from '../components/TodoItem.vue'

describe('TodoItem', () => {
  it('should render the correct markup', () => {
    const todo = { text: 'Test Task', completed: false }
    const wrapper = mount(TodoItem, { props: { todo } })
    expect(wrapper.html()).toContain('Test Task')
  })

  it('should emit remove event when button is clicked', async () => {
    const todo = { text: 'Test Task', completed: false }
    const wrapper = mount(TodoItem, { props: { todo } })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('remove')
  })
})
