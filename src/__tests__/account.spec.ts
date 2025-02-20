import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import account from '../views/account/index.vue'

describe('account - Component', () => {
  it.skip('renders properly and displays the correct message', () => {
    const wrapper = mount(account, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
    expect(wrapper.text()).toContain('Cristian')
    expect(wrapper.isVisible()).toBe(true)
  })
})
