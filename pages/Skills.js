import React from "react"
import Layout from "../Components/Layout"
import styled from 'styled-components'

const Box = styled.div({
  background: '#FAEBD7',
  height: 'auto',
  width: 'auto'
});

export default function Blog() {
    return (
        <div>
            <Layout>
                <Box className="boxSkills">
                    <h1 className="mainHdngSkill">What can I do...</h1>
                    <div className="dvSkillItems">
                        
                        <div className="dvSkill-1">
                            <h3 className="HdngSkill1">Frontend Developer</h3>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div className="dvSkill-2">
                            <h3 className="HdngSkill1">Frontend Developer</h3>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div className="dvSkill-2">
                            <h3 className="HdngSkill1">Frontend Developer</h3>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                </Box>              
            </Layout>
        </div>
    )
}