cat <<EOT > src/tests/TodoApp.spec.js
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoApp from '../TodoApp.vue'

describe('TodoApp', () => {
  it('should render the todo app', () => {
    const wrapper = mount(TodoApp)
    expect(wrapper.find('h1').text()).toBe('To-Do List')
  })

  it('should add a new todo', async () => {
    const wrapper = mount(TodoApp)
    const input = wrapper.find('input')
    await input.setValue('New Task')
    await input.trigger('keyup.enter')
    expect(wrapper.find('ul').text()).toContain('New Task')
  })

  it('should remove a todo', async () => {
    const wrapper = mount(TodoApp)
    const input = wrapper.find('input')
    await input.setValue('Task to remove')
    await input.trigger('keyup.enter')

    const removeButton = wrapper.find('button')
    await removeButton.trigger('click')
    expect(wrapper.find('ul').text()).not.toContain('Task to remove')
  })
})
EOT
