import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

it('should render without crashing', () => {
    render(<Card />)
})
