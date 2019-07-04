import { renderHook, act } from '@testing-library/react-hooks';
import { useColorPicker } from './JokerContainer.hooks';

const eventWithMaterial = {
  position2D: [1, 2],
  material: {
    name: 'color_15'
  }
};

const eventWithoutMaterial = {
  position2D: [1, 2],
  material: undefined
};

const api = {
  setColor: jest.fn()
};

describe('useColorPicker()', () => {
  test('should handle canvas click', () => {
    const { result } = renderHook(() => useColorPicker());

    act(() => {
      result.current.handleCanvasClick(eventWithMaterial);
    });

    expect(result.current.pickerPosition).toEqual([1, 2]);

    act(() => {
      result.current.handleCanvasClick(eventWithMaterial);
      result.current.handleCanvasClick(eventWithoutMaterial);
    });

    expect(result.current.pickerPosition).toBe(undefined);
  });
  test('should handle material state', () => {
    const { result } = renderHook(() => useColorPicker());

    act(() => {
      result.current.handleCanvasClick(eventWithMaterial);
    });

    const expected = eventWithMaterial.material.name;
    const actual = result.current.materialName;

    expect(actual).toBe(expected);
  });

  describe('handleColorClick()', () => {
    test('should call setColor from api', () => {
      const color = 'gray';
      const { result } = renderHook(() => useColorPicker());

      act(() => {
        result.current.handleCanvasClick(eventWithMaterial, api);
      });

      act(() => {
        result.current.handleColorClick(color);
      });

      expect(api.setColor).toHaveBeenCalled();
      expect(api.setColor).toHaveBeenCalledWith({
        material: eventWithMaterial.material.name,
        hexColor: color
      });
    });
    test('should clear current material name and position', () => {
      const { result } = renderHook(() => useColorPicker());

      act(() => {
        result.current.handleCanvasClick(eventWithMaterial, api);
      });

      act(() => {
        result.current.handleColorClick('gray');
      });

      expect(result.current.materialName).toBe(undefined);
      expect(result.current.pickerPosition).toBe(undefined);
    });
  });
});
