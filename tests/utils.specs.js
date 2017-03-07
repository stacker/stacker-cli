import path from 'path';
import { expect } from 'chai';
import core from 'stacker-core';

import {
  findLinkRecursively,
  findConfigRecursively,
} from '../src/utils';


describe('utils', function () {
  describe('findLinkRecursively', function () {
    const validPath = '/path1';
    const invalidPath = '/path2';

    beforeEach(function () {
      this.sandbox.stub(core, 'findLinkByPath', (dir) => {
        if (dir === validPath) return Promise.resolve({ name: 'Project1', path: validPath });
        return Promise.resolve(null);
      });
    });

    it('should pass when link path exists', function () {
      return findLinkRecursively(validPath).then((link) => {
        expect(link.path).to.equal(validPath);
      });
    });
    it('should pass when in subdir', function () {
      return findLinkRecursively(path.join(validPath, 'subdir')).then((link) => {
        expect(link.path).to.equal(validPath);
      });
    });
    it('should fail when link path does not exist', function () {
      return findLinkRecursively(invalidPath).then((link) => {
        expect(link).to.be.null;
      });
    });
  });

  describe('findConfigRecursively', function () {
    const config = { services: [] };
    const validPath = '/path1';
    const invalidPath = '/path2';

    beforeEach(function () {
      this.sandbox.stub(core, 'loadProjectConfig', (dir) => {
        if (dir === validPath) return Promise.resolve(config);
        return Promise.resolve(null);
      });
    });

    it('should pass when config exists', function () {
      return findConfigRecursively(validPath).then((content) => {
        expect(content).to.deep.equal(config);
      });
    });
    it('should pass when config exists in parent', function () {
      return findConfigRecursively(path.join(validPath, 'subdir')).then((content) => {
        expect(content).to.deep.equal(config);
      });
    });
    it('should fail when config does not exist', function () {
      return findConfigRecursively(invalidPath).then((content) => {
        expect(content).to.be.null;
      });
    });
  });
});
