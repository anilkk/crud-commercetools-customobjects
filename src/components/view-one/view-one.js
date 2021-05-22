import React from 'react';
import Text from '@commercetools-uikit/text';
import { useQuery } from "@apollo/client";
import { GRAPHQL_TARGETS } from "@commercetools-frontend/constants";
import GetProjectSettings from "./get-project-settings.graphql";
import CustomObjects from './custom-objects';
import messages from './messages';


const ViewOne = () => {
    const { data } = useQuery(GetProjectSettings, {
        variables: {
          target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
          limit: 10,
          offset: 0,
        },
      });

    return (<div>
        {data && <Text.Body>{data.project.name}</Text.Body>}
        <Text.Body intlMessage={messages.title} />
        <CustomObjects />
    </div>);
};
ViewOne.displayName = 'ViewOne';

export default ViewOne;
