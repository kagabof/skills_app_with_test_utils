import { shallowMount, mount } from '@vue/test-utils'
import SkillsComp from '@/components/SkillsComp.vue'

describe('SkillsComp.vue', () => {
  it('main component exists', () => {
    const wrapper = shallowMount(SkillsComp);
    expect(wrapper.find('.hello').exists()).toBe(true);
  });

  it('add skills', async () => {
    const wrapper = mount(SkillsComp, {});
    
    await wrapper.find('#skill_input').setValue('help');
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.findAll('.skill').length).toBe(3);
  });

  it('remove skills', async () => {
    const wrapper = mount(SkillsComp);
    const skill = 'React Native';
    await wrapper.find('#skill_input').setValue(skill);
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.findAll('.skill').length).toBe(3);
    expect(wrapper.findAll('.skill').at(2).text()).toBe(`3. ${skill}`);
    await wrapper.findAll('.skill').at(2).find('i').trigger('click');
    expect(wrapper.findAll('.skill').length).toBe(2);
  })
})
