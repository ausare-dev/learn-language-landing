import SkillsBlock from "./SkillsBlock/SkillsBlock"
import Style from "./Skills.module.scss"

function Skills() {
  return (
    <section>
      <div className='container'>
        <div className={Style.skills}>
          <h2 className={Style.skills__title}>Skills</h2>
          <div className={Style.skills__items}>
            <SkillsBlock
              img='/image/skill-1.png'
              title='Speaking'
              className='first'
            >
              Improve your English skills and confidence. Live classes and
              interactive lessons online. 20% extra free for a limited time only
              <br />
              <br />
              Learn English online and improve your skills through our
              high-quality courses and resources – all designed for adult
              language learners.
            </SkillsBlock>
            <SkillsBlock
              img='/image/skill-2.png'
              title='Writing'
            >
              One of the most important and extensive areas of natural science,
              the science that studies substances, also their composition
            </SkillsBlock>
            <SkillsBlock
              img='/image/skill-3.png'
              title='Reading'
            >
              perception and response actions of the user resulting from the use
              and or up coming use of the product, system or service
            </SkillsBlock>
            <SkillsBlock
              img='/image/skill-4.png'
              title='Listening'
              className='invert'
            >
              Here you can find activities to practise your listening skills.
              Listening will help you to improve your understanding
            </SkillsBlock>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
