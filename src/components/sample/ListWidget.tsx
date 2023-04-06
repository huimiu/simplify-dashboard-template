import "./ListWidget.css";

import { Button, Spinner, Text } from "@fluentui/react-components";
import { List28Filled, MoreHorizontal32Regular } from "@fluentui/react-icons";
import { BaseWidget } from "@microsoft/teamsfx-react";

interface ListModel {
  id: string;
  title: string;
  content: string;
}

interface IListWidgetState {
  data: ListModel[];
}

export default class ListWidget extends BaseWidget<any, IListWidgetState> {
  override async getData(): Promise<IListWidgetState> {
    const listData: ListModel[] = [
      {
        id: "1",
        title: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet",
      },
      {
        id: "2",
        title: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet",
      },
      {
        id: "3",
        title: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet",
      },
    ];
    return { data: listData };
  }

  override header(): JSX.Element | undefined {
    return (
      <div>
        <List28Filled />
        <Text>Your List</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  override body(): JSX.Element | undefined {
    return (
      <div className="list-body">
        {this.state.data.map((t: ListModel) => {
          return (
            <div key={`${t.id}-div`}>
              <div className="divider" />
              <Text className="title">{t.title}</Text>
              <Text className="content">{t.content}</Text>
            </div>
          );
        })}
      </div>
    );
  }

  override footer(): JSX.Element | undefined {
    return <Button appearance="primary">View Details</Button>;
  }

  protected loading(): JSX.Element | undefined {
    return (
      <div className="loading">
        <Spinner label="Loading..." labelPosition="below" />
      </div>
    );
  }
}
