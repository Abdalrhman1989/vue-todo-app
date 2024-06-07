import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TodoApp from '../TodoApp.vue';

describe('TodoApp', () => {
  it('should render the correct markup', () => {
    const wrapper = mount(TodoApp);
    expect(wrapper.find('h1').text()).toBe('To-Do List');
  });

  it('should add a todo', async () => {
    const wrapper = mount(TodoApp);
    const input = wrapper.find('input');
    await input.setValue('New Task');
    await input.trigger('keyup.enter');
    expect(wrapper.find('ul').text()).toContain('New Task');
  });

  it('should remove a todo', async () => {
    const wrapper = mount(TodoApp);
    const input = wrapper.find('input');
    await input.setValue('New Task');
    await input.trigger('keyup.enter');
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('ul').text()).not.toContain('New Task');
  });
});
