// src/tests/TodoApp.spec.js
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TodoApp from '../TodoApp.vue';

describe('TodoApp', () => {
  it('should render the correct markup', () => {
    const wrapper = mount(TodoApp);
    console.log(wrapper.html());  // Log the HTML output to understand the structure
    expect(wrapper.html()).toContain('<h1>To-Do List</h1>');
  });

  it('should add a todo', async () => {
    const wrapper = mount(TodoApp);
    const input = wrapper.find('input');
    await input.setValue('New Task');
    await input.trigger('keyup.enter');
    expect(wrapper.html()).toContain('New Task');
  });

  it('should remove a todo', async () => {
    const wrapper = mount(TodoApp);
    const input = wrapper.find('input');
    await input.setValue('New Task');
    await input.trigger('keyup.enter');
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.html()).not.toContain('New Task');
  });
});
