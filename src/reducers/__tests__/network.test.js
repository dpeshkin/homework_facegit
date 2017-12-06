import network from "../network";
import { clearNetworkErrors, networkError } from "../../actions/network";

describe("В редьюсере network", () => {
  describe("Экшен clearNetworkErrors", () => {
    it("Очищает поле error", () => {
      const next = network({ error: true }, clearNetworkErrors());
      expect(next.error).toBeFalsy();
    });
    it("Очищает поле message", () => {
      const next = network({ message: true }, clearNetworkErrors());
      expect(next.message).toBeFalsy();
    });
  });
  describe("Экшен networkError", () => {
    const payload = { response: { data: { message: "network error" } } };
    it("наоплняет данными поле error", () => {
      const next = network({ error: null }, networkError(payload));
      expect(next.error).toEqual(payload);
    });
    it("наоплняет данными поле message", () => {
      const next = network({ message: null }, networkError(payload));
      expect(next.message).toEqual(payload.response.data.message);
    });
  });
});
