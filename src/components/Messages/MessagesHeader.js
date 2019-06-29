import React from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';

class MessagesHeader extends React.Component {
    render() {
        return (
            <Segment clearing>
                {/*Channel title */}
                <Header
                    fluit="true"
                    as="h2"
                    floated="left"
                    style= {{ marginBottom: 0}}>
                      
                        <span>
                        Channel
                        <Icon 
                        name={"star outline"}
                        color="black"
                        />
                        </span>

                        <Header.Subheader>2 Users</Header.Subheader>    
               
                </Header>

                {/* Channel Search Input */}
                <Header float="right">
                    <Input
                        size="mini"
                        icon="search"
                        name="searchTerm"
                        palceholder="Search Messages"
                     />
                </Header>
            </Segment>
        )
    }
}

export default MessagesHeader;