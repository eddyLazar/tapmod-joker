import { renderHook, act } from '@testing-library/react-hooks';
import { useMaterialClick } from './JokerContainer.hooks';

const AlbedoPBRColor = [1, 0.2482670000000001, 0];

const eventWithMaterial = {
  position2D: [1, 2],
  material: {
    name: 'color_15',
    channels: {
      AlbedoPBR: {
        color: AlbedoPBRColor
      }
    }
  }
};

const eventWithoutMaterial = {
  position2D: [1, 2],
  material: undefined
};

describe('useColorPicker()', () => {
  test('should handle canvas click', () => {
    const { result } = renderHook(() => useMaterialClick());

    act(() => {
      result.current.handleMaterialClick(eventWithMaterial);
    });

    expect(result.current.clickPosition).toEqual([1, 2]);

    act(() => {
      result.current.handleMaterialClick(eventWithMaterial);
      result.current.handleMaterialClick(eventWithoutMaterial);
    });

    expect(result.current.pickerPosition).toBe(undefined);
  });
  test('should handle material name state', () => {
    const { result } = renderHook(() => useMaterialClick());

    act(() => {
      result.current.handleMaterialClick(eventWithMaterial);
    });

    const expected = eventWithMaterial.material.name;
    const actual = result.current.materialName;

    expect(actual).toBe(expected);
  });
});
