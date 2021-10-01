import { createTaskData } from "../tasksGateway";

it("Should return Promise with Response with status 201"),
  () => {
    let status;
    createTaskData().then((response) => {
      status = response.status;
    });
    expect(createTaskData());
  };
